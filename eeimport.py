import ee
import sys

# Define the name of the output file
output_file = "ee_output.txt"

# Redirect the standard output to the file
sys.stdout = open(output_file, "w")

# Import the Earth Engine library
ee.Initialize()

# Restore the standard output
sys.stdout.close()
sys.stdout = sys.__stdout__