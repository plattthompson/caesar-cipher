# To use, type `python caesar.py <encrypt/decrypt> <message> <shift amount>`
# e.g. `python caesar.py encrypt "hello world" 3`

import sys

crypt_choice = sys.argv[1]
message_str = sys.argv[2]
secret_key = int(sys.argv[3])

def encrypt(message, shift_amount):
	encrypted_str = ''
	ascii_char = None
	for letter in message:
		encrypted_letter_ascii = ord(letter) + shift_amount
		if letter == ' ':
			encrypted_str += ' '
		else:
			encrypted_str += chr(encrypted_letter_ascii)
	print(encrypted_str)

def decrypt(message, shift_amount):
	decrypted_str = ''
	ascii_char = None
	for letter in message:
		decrypted_letter_ascii = ord(letter) - shift_amount
		if letter == ' ':
			decrypted_str += ' '
		else:
			decrypted_str += chr(decrypted_letter_ascii)
	print(decrypted_str)

encrypt(message_str, secret_key) if crypt_choice == 'encrypt' else decrypt(message_str, secret_key)