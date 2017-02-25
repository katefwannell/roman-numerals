
Symbol  Value
I       1
V       5
X       10
L       50
C       100
D       500
M       1,000


The program adds the value of all the symbols.
Example Input: 2
Example Output: II
Example Input: 66
Example Output: LXVI

The exception is that there may not be more than three of the same characters in a row. Instead, you switch to subtraction.
Example Output: IV (not IIII)
Example Input: 90
Example Output: XC (not LXXXX)

You also have to separate ones, tens, hundreds, and thousands. In other words, 99 is XCIX, not IC.
Example Input: 99
Example Output: XCIX (not IC)

You cannot count higher than 3,999 in Roman numerals.
