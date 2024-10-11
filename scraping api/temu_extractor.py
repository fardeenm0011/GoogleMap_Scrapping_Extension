from bs4 import BeautifulSoup
import json
import re

class TemuExtractor():

    def __init__(self, page_source):
        self.page_source = page_source
        self.soup = BeautifulSoup(self.page_source, 'html.parser')
        self.business_name = self.get_business_name()
        self.business_website = self.get_business_website()
        self.business_phone = self.get_business_phone()
        self.business_address = self.get_business_address()
        self.parsed_json = self.parse_json()
    
    def parse_json(self):
        # Regular expression to capture JSON data assigned to window.rawData
        json_pattern = r'window\.rawData\s*=\s*(\{.*?\});'

        # Find the JSON data using regular expression
        json_match = re.search(json_pattern, self.page_source, re.DOTALL)

        if json_match:
            raw_json = json_match.group(1)
            # Attempt to parse the JSON data
            return json.loads(raw_json)


        return None


    def get_business_name(self):
        
        business_name_div= self.soup.find("div", { "class" : "Io6YTe fontBodyMedium kR99db" }) 
        business_name = business_name_div.get_text()
        return business_name
    
    def get_business_website(self):

        business_website_div = self.soup.find("div", { "class" : "Io6YTe fontBodyMedium kR99db " }) 
        business_website = business_website_div.get_text()
        return business_website
    
    def get_business_phone(self):

        business_phone_div = self.soup.find("div", { "class" : "Io6YTe fontBodyMedium kR99db " }) 
        business_phone = business_phone_div.get_text()
        return business_phone

    def get_business_address(self):

        business_address_div = self.soup.find("div", { "class" : "Io6YTe fontBodyMedium kR99db " }) 
        business_address = business_address_div.get_text()
        return business_address

    def process(self):

        business_name = self.get_business_name()
        business_website = self.get_business_website()
        business_phone = self.get_business_phone()
        business_address = self.get_business_address()
        business_information = {
            "name" : business_name,
            "website" : business_website,
            "phone number" : business_phone,
            "address" : business_address
        }
        return business_information
        