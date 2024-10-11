from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver import ActionChains
import pickle
import os
import undetected_chromedriver as uc
from bs4 import BeautifulSoup
import time
from webdriver_manager.chrome import ChromeDriverManager
import urllib.request
import zipfile
import os
from pathlib import Path


# Download and get the path of ChromeDriver executable
chrome_driver_path = ChromeDriverManager().install()

def check_for_sold_out_page(html):
    soup = BeautifulSoup(html, 'html.parser')
    base_content = soup.find('div', {'class': 'baseContent'})

    if base_content:
        sold_out_div = base_content.find('div', string='This item is sold out.')
        if sold_out_div:
            return True

    return False

# def load_cookies(driver,url):
#     if os.path.exists('cookies.pkl'):
#         driver.get(url)
#         with open("cookies.pkl", "rb") as file:
#             cookies = pickle.load(file)
#             for cookie in cookies:
#                 driver.add_cookie(cookie)
#     else:
#         driver.get('https://www.temu.com/login.html')

# def save_cookies(driver):
#     cookies = driver.get_cookies()
#     with open("cookies.pkl", "wb") as file:
#         pickle.dump(cookies, file)

# def attempt_login(driver, actions):
#     if "https://www.temu.com/login.html" in driver.current_url:
#         print("You've been redirected to the login page.")
#         time.sleep(2)
#         save_cookies(driver)


def click_see_more(driver):

    # Find the right content element by its ID
    right = driver.find_element(By.ID, "rightContent")

    # Get the last child of right
    desc = right.find_elements(By.XPATH, "./*")[-1]  # the "./*" XPath expression will get all child elements

    # Find the 'svg' elements under 'desc'
    svgs = desc.find_elements(By.TAG_NAME, "svg")

    # Get the last 'svg' element's parent
    if svgs:
        see_more = svgs[-1].find_element(By.XPATH, "./..")

        # Click on 'see more'
        driver.execute_script("arguments[0].click();", see_more)

        time.sleep(0.25)
        
def change_region_language(region, language, driver):
    time.sleep(0.1)
    try:
        privacy = driver.find_elements(By.CLASS_NAME, "autoScale-18RRC")
        reject_all = privacy[0]
        driver.execute_script("arguments[0].click();", reject_all)
    except:
        time.sleep(0.3) 
        privacy = driver.find_elements(By.CLASS_NAME, "autoScale-18RRC")
        reject_all = privacy[0] 
        reject_all = driver.find_element(By.CLASS_NAME, "autoScale-18RRC")     
        driver.execute_script("arguments[0].click();", reject_all)
    alters = driver.find_elements(By.CLASS_NAME, 'regionContainer-2HHDI')
    region_alter = alters[0]
    languages = alters[1]
    driver.execute_script("arguments[0].click();", region_alter)
    time.sleep(0.3)
    region_languages = driver.find_elements(By.CLASS_NAME, 'selectorItem-3XH7M')
    resion_Switzerland = region_languages[44]
    driver.execute_script("arguments[0].click();", resion_Switzerland)
    time.sleep(0.3)
    try:
        region_switches = driver.find_elements(By.CLASS_NAME, 'inner-2ElsT')
        region_switch = region_switches[0]
        driver.execute_script("arguments[0].click();", region_switch)
    except:
        time.sleep(0.3)
        region_switches = driver.find_elements(By.CLASS_NAME, 'inner-2ElsT')
        region_switch = region_switches[0]
        driver.execute_script("arguments[0].click();", region_switch)
    try:
        time.sleep(0.5)
        driver.execute_script("arguments[0].click();", languages)
    except:
        time.sleep(1)
        alters = driver.find_elements(By.CLASS_NAME, 'regionContainer-2HHDI')
        #time.sleep(1)
        languages = alters[1]
        driver.execute_script("arguments[0].click();", languages)
    time.sleep(0.3)
    region_languages = driver.find_elements(By.CLASS_NAME, 'selectorItem-3XH7M')
    # language_German= region_languages[1]
    # driver.execute_script("arguments[0].click();", language_German)
    # time.sleep(0.3)
    language_select = None
    if language=='German':
        language_select= region_languages[1]
    else:
        language_select= region_languages[0]
    driver.execute_script("arguments[0].click();", language_select)
    time.sleep(0.3)
    
    return driver

def scrape_url(scrape_URL, search_count):
    
    options = uc.ChromeOptions()
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    browser = uc.Chrome(executable_path=chrome_driver_path, options=options)
    browser.get(scrape_URL)
    page_sources = []
    time.sleep(3)
    Business_links = None
    try:
        Business_links = browser.find_elements(By.CLASS_NAME, "hfpxzc")
    except:
        time.sleep(0.3) 
        try: 
            Business_links = browser.find_elements(By.CLASS_NAME, "hfpxzc")
        except:
            time.sleep(0.3)
            Business_links = browser.find_elements(By.CLASS_NAME, "hfpxzc")
       
    for i in range(search_count):
        # Configuring undetected_chromedriver
        
        try:
            browser.execute_script("arguments[0].click();", Business_links[i])
        except:
            browser.execute_script("arguments[0].click();", Business_links[i])        
        
        time.sleep(2)    
        page_source = browser.page_source
        page_sources.append(page_source)
        try:
            close_button = browser.find_element(By.CLASS_NAME, "hWERUb")
        except:
            close_button = browser.find_element(By.CLASS_NAME, "hWERUb")
        time.sleep(1)
        browser.execute_script("arguments[0].click();", close_button)
        browser.quit()

        # Handle 'sold out' or timeout
        # if page_source:
        #     if check_for_sold_out_page(page_source):
        #         print("This item is sold out has showed up, re-login may be required.")
        #         if os.path.exists('cookies.pkl'):
        #             os.remove('cookies.pkl')
        #         continue
        #     else:

        #         # Successfully scraped
        #         return page_source
        # else:
        #     # Timeout occurred
        #     print("Timeout, retrying...")
        #     if os.path.exists('cookies.pkl'):
        #         os.remove('cookies.pkl')
        #     continue

    print("Max retries reached.")
    return page_source, variant_pages[1:]

