const {checkPalindrome}=require('./util');

test('Should output polindrome or not',()=>

{
    const text=checkPalindrome('');
    expect(text).toBe('It is a palindrome');
    expect(text).toBe('It is not a palindrome');
}
)

