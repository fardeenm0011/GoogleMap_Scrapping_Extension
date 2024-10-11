from scraper import scrape_url
from temu_extractor import TemuExtractor
from csv_processor import ProductToCSVConverter
from fastfs import read_lines, write_lines
from urllib.parse import urlparse
from fastfs import write_json
import json
from translate import Translator
import io

from datetime import datetime

def get_start_timestamp():

    timestamp = datetime.now().strftime('%m-%d-%I%p-%M-%S')
    return timestamp
    
def write_json_to_Output(file_data, language, full_path):
    
    with io.open(full_path, 'a', encoding='UTF8') as f:
        json.dump(file_data, f, ensure_ascii=False)


def process_url(scrape_URL, search_count, start_timestamp):

    page_sources = []

    page_sources = scrape_url(scrape_URL, search_count)
    
    for i in range(len(page_sources)):

        temu_extractor = TemuExtractor(page_sources[i])
        parsed_data = None
        parsed_data = temu_extractor.process()

        csv_converter = ProductToCSVConverter(parsed_data)

        csv_converter.generate_csv(start_timestamp)

def scraping(scrape_URL, search_count):

    start_timestamp = get_start_timestamp()
    
    process_url(scrape_URL, search_count, start_timestamp)