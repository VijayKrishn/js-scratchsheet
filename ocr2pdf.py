import PyPDF2
import docx
import pytesseract
from pdf2image import convert_from_path

# Function to extract text from PDF using OCR if needed
def extract_text_from_pdf(pdf_path):
    text = ""
    
    try:
        # Try to extract text using PyPDF2
        pdf_file = open(pdf_path, "rb")
        pdf_reader = PyPDF2.PdfFileReader(pdf_file)
        for page_num in range(pdf_reader.getNumPages()):
            page = pdf_reader.getPage(page_num)
            text += page.extractText()
        pdf_file.close()
    except:
        # If PyPDF2 fails, use OCR (Tesseract)
        pages = convert_from_path(pdf_path)
        for page in pages:
            text += pytesseract.image_to_string(page)

    return text

# Function to save text as a Word document
def save_as_word(text, output_docx_path):
    doc = docx.Document()
    doc.add_paragraph(text)
    doc.save(output_docx_path)

# Function to save text as a plain text file
def save_as_text(text, output_text_path):
    with open(output_text_path, "w", encoding="utf-8") as file:
        file.write(text)

# Main function
if __name__ == "__main__":
    pdf_path = "sample.pdf"  # Replace with the path to your PDF file
    output_docx_path = "output.docx"
    output_text_path = "output.txt"

    extracted_text = extract_text_from_pdf(pdf_path)

    save_as_word(extracted_text, output_docx_path)
    save_as_text(extracted_text, output_text_path)

