import os
import subprocess

def convert_pdf_to_text_with_ocrmypdf(pdf_file, output_text_file, force_ocr=False, redo_ocr=False):
    try:
        ocrmypdf_args = ["ocrmypdf"]
        
        if force_ocr:
            ocrmypdf_args.append("--force-ocr")
        elif redo_ocr:
            ocrmypdf_args.append("--redo-ocr")
        
        ocrmypdf_args.extend([pdf_file, output_text_file])
        
        subprocess.run(ocrmypdf_args)
        
        print(f"OCR conversion completed. Text saved to {output_text_file}")
    except Exception as e:
        print(f"An error occurred: {str(e)}")

if __name__ == "__main__":
    # Replace these paths with your PDF input file and desired text output file
    input_pdf_file = "Sattvik-Food-Book-1.pdf"
    output_text_file = "output.txt"
    
    # Set force_ocr=True or redo_ocr=True as needed
    convert_pdf_to_text_with_ocrmypdf(input_pdf_file, output_text_file, force_ocr=True)

