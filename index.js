const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

convertBtn.addEventListener("click", unitConverter)

function unitConverter() {
    const inputEl = document.getElementById("input-el").textContent
    const lengthResult = inputEl * meterToFeet
    const volumeResult = inputEl * literToGallon
    const massResult = inputEl * kiloToPound
    const lengthReverseResult = inputEl / meterToFeet
    const volumeReverseResult = inputEl / literToGallon
    const massReverseResult = inputEl / kiloToPound

    lengthEl.textContent = `${inputEl} meters = ${lengthResult.toFixed(2)} feet | ${inputEl} feet = ${lengthReverseResult.toFixed(2)} meters`
    volumeEl.textContent = `${inputEl} liters = ${volumeResult.toFixed(2)} gallons | ${inputEl} gallons = ${lengthReverseResult.toFixed(2)} liters`
    massEl.textContent = `${inputEl} kilos = ${massResult.toFixed(2)} pounds | ${inputEl} pounds = ${lengthReverseResult.toFixed(2)} kilos`
}