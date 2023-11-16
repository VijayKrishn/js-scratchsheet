import docx
import argparse
from translate import Translator

# Function to translate text into a target language
def translate_text(text, target_language):
    translator = Translator(to_lang=target_language)
    translated_text = translator.translate(text)
    return translated_text

# Function to save translated text to a file
def save_translation(translation, language, output_path):
    with open(output_path, "w", encoding="utf-8") as file:
        file.write(f"Translated to {language}:\n\n")
        file.write(translation)

# List of Indian languages and their ISO language codes
indian_languages = {
    "Assamese": "as",
    "Bengali": "bn",
    "Gujarati": "gu",
    "Hindi": "hi",
    "Kannada": "kn",
    "Kashmiri": "ks",
    "Konkani": "kok",
    "Malayalam": "ml",
    "Manipuri": "mni",
    "Marathi": "mr",
    "Nepali": "ne",
    "Oriya": "or",
    "Punjabi": "pa",
    "Sanskrit": "sa",
    "Sindhi": "sd",
    "Tamil": "ta",
    "Telugu": "te",
    "Urdu": "ur",
    # Add more Indian languages and their ISO codes as needed
}

def main():
    parser = argparse.ArgumentParser(description="Translate text into Indian languages.")
    parser.add_argument("input_file", help="Path to the input .txt or .docx file")
    args = parser.parse_args()

    input_file_path = args.input_file
    output_base_path = "output"

    # Check the file extension to determine the input format
    if input_file_path.endswith(".txt"):
        with open(input_file_path, "r", encoding="utf-8") as file:
            input_text = file.read()
    elif input_file_path.endswith(".docx"):
        doc = docx.Document(input_file_path)
        input_text = "\n".join([paragraph.text for paragraph in doc.paragraphs])
    else:
        raise ValueError("Input file format not supported. Use .txt or .docx")

    for language, iso_code in indian_languages.items():
        translated_text = translate_text(input_text, iso_code)
        output_path = f"{output_base_path}_{language}.txt"
        save_translation(translated_text, language, output_path)

if __name__ == "__main__":
    main()

