const randomSlug = (authorName) => {
    let slug = `${authorName}-`
    const arry = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'cl' , 'ca' , 'cd' , 'cc' , 'cb' ]
    const firstRandomNamber = Math.round(Math.random() * 12)
    const secRandomNamber = Math.round(Math.random() * firstRandomNamber)
    const finalRandomNamber = Math.round(Math.random() * 10000)
    slug = `${authorName}-${arry[secRandomNamber]}`
    arry.map((charr , index) => {
        if (index <= secRandomNamber) {
            slug += charr
        }
    })
    slug += finalRandomNamber.toString()
    return slug
}

export { randomSlug }