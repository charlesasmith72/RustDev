Left(
    LookUp(
        Office365Users.SearchUser({searchTerm: TextInput1.Text}),
        UserPrincipalName = TextInput1.Text
    ).UserPrincipalName,
    Find(
        "@",
        LookUp(
            Office365Users.SearchUser({searchTerm: TextInput1.Text}),
            UserPrincipalName = TextInput1.Text
        ).UserPrincipalName
    ) - 1
)
