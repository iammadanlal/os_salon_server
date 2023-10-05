# Tic-Tac-Toe Game

# Initialize the board
board = [" " for _ in range(9)]

# Function to print the Tic-Tac-Toe board
def print_board():
    row1 = f"| {board[0]} | {board[1]} | {board[2]} |"
    row2 = f"| {board[3]} | {board[4]} | {board[5]} |"
    row3 = f"| {board[6]} | {board[7]} | {board[8]} |"
    line = "-------------"
    print(row1)
    print(line)
    print(row2)
    print(line)
    print(row3)

# Function to check for a win
def check_win(player):
    # Check rows, columns, and diagonals
    for i in range(0, 9, 3):
        if board[i] == board[i + 1] == board[i + 2] == player:
            return True
    for i in range(3):
        if board[i] == board[i + 3] == board[i + 6] == player:
            return True
    if board[0] == board[4] == board[8] == player:
        return True
    if board[2] == board[4] == board[6] == player:
        return True
    return False

# Function to check for a draw
def check_draw():
    return " " not in board

# Main game loop
current_player = "X"
while True:
    print_board()
    print(f"Player {current_player}'s turn.")
    move = int(input("Enter your move (1-9): ")) - 1

    if board[move] == " ":
        board[move] = current_player

        if check_win(current_player):
            print_board()
            print(f"Player {current_player} wins!")
            break
        elif check_draw():
            print_board()
            print("It's a draw!")
            break
        else:
            current_player = "O" if current_player == "X" else "X"
    else:
        print("Invalid move. Try again.")
