import csv
import os
import itertools

DEFAULT_COLUMNS = [
    "Business name", "Business website", "Business phone number", "Business address"
]

DEFAULT_VALUES = {
    "Business name": "",
    "Business website": "",
    "Business phone number": "",
    "Business address": ""
}

class ProductToCSVConverter:
    def __init__(self, business_information):
        self.business_information = business_information

        self.rows = []

        self.set_first_row = False
    
        self.img_position = 1
    
    def _generate_handle(self, title):

        return title.replace(" ", "-").replace('/', '-').lower()[:255]
    
    def generate_csv(self, start_timestamp):
    
        # Write to CSV
        file_name = f"Business-{start_timestamp}.csv"
        full_path = f"output/{file_name}"

        file_exists = os.path.exists(full_path)

        with open(full_path, "a", newline="", encoding="utf-8") as csv_file:
            writer = csv.DictWriter(csv_file, fieldnames=DEFAULT_COLUMNS)
            
            # We only need to write the header once
            if not file_exists:
                writer.writeheader()

            for row in self.rows:
                writer.writerow(row)

        if not file_exists:
            print('Created NEW CSV:', file_name)
        else:
            print('Appending to existing CSV:', file_name)
