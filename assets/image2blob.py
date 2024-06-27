import sys
import binascii

def image_to_blob(image_path, output_path):
    with open(image_path, 'rb') as image_file:
        image_bytes = image_file.read()
        hex_representation = binascii.hexlify(image_bytes).decode('utf-8')
        
        # Convert the hexadecimal string to a formatted blob array
        blob_array = []
        for i in range(0, len(hex_representation), 2):
            blob_array.append(f"0x{hex_representation[i:i+2]}")
        
        # Format the blob array into multiple lines for better readability
        formatted_blob = ""
        line_length = 12  # Number of bytes per line
        for i in range(0, len(blob_array), line_length):
            formatted_blob += "  " + ", ".join(blob_array[i:i+line_length]) + ",\n"
        
        blob_content = "var image : Blob = Blob.fromArray([\n" + formatted_blob.strip(",\n") + "\n]);"
        
        # Write to the output file
        with open(output_path, 'w') as output_file:
            output_file.write(blob_content)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python image_to_blob.py <image_path> <output_path>")
        sys.exit(1)

    image_path = sys.argv[1]
    output_path = sys.argv[2]
    image_to_blob(image_path, output_path)
    print(f"Blob representation written to {output_path}")
