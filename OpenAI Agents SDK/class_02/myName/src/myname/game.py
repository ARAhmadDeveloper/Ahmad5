# ```python
import random

def guess_the_number():
    """Plays a number guessing game with the user."""

    secret_number = random.randint(1, 100)
    guesses_left = 7
    print("Welcome to the Number Guessing Game!")
    print("I'm thinking of a number between 1 and 100.")

    while guesses_left > 0:
        print(f"\nYou have {guesses_left} guesses left.")
        try:
            guess = int(input("Take a guess: "))
        except ValueError:
            print("Invalid input. Please enter a number.")
            continue

        if guess < secret_number:
            print("Too low!")
        elif guess > secret_number:
            print("Too high!")
        else:
            print(f"Congratulations! You guessed the number in {7 - guesses_left} tries.")
            return

        guesses_left -= 1

    print(f"\nYou ran out of guesses. The number was {secret_number}.")

if __name__ == "__main__":
    guess_the_number()
# ```

# To play the game:

# 1.  **Save the code:** Save the code above as a Python file (e.g., `guessing_game.py`).
# 2.  **Run the file:** Open a terminal or command prompt, navigate to the directory where you saved 
# the file, and run it using the command `python guessing_game.py`.

# The game will then start, and you can begin guessing!  The game will tell you if your guess is too 
# high or too low, and you have a limited number of attempts.  Let me know if you'd like a different 
# type of game!  I can create others, such as:

# *   A text-based adventure game
# *   A simple card game
# *   A tic-tac-toe game
# *   A hangman game


# Just let me know what you have in mind!