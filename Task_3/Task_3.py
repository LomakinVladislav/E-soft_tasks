def ValidBracket(string):
    stack = []
    
    for i in range(len(string)):
        if string[i] in ["(", "[", "{"]:
            stack.append(string[i])
    
        elif string[i] in [")", "]", "}"]:
            if stack[-1] == '(' and string[i] != ")":
                return False
            elif stack[-1] == '[' and string[i] != "]":
                return False
            elif stack[-1] == '{' and string[i] != "}":
                return False
            
            stack.pop()

    return stack == []

string = str(input())
print(ValidBracket(string))