function addParagraphs() {
    const pOne = document.getElementById('p-one')
    const pTwo = document.getElementById('p-two')
    const output = document.getElementById('output')
    const val1 = parseInt(pOne.innerHTML)
    const val2 = parseInt(pTwo.innerHTML)
    output.innerHTML = val1 + val2
}

function results() {
    document.getElementById('btn').addEventListener('click', (e) => {
        e.preventDefault()
        addParagraphs()
    })
}


module.exports = {
    results
}