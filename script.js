function displayValue(val) {
  document.getElementById("result").value += val
}

function solving() {
  let x = document.getElementById("result").value
  let y = eval(x)
  document.getElementById("result").value = y
}

function clearing() {
  document.getElementById("result").value = ""
}
