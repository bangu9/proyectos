document.querySelector("#buttonAlert").addEventListener('click', clickedAlert);
document.querySelector("#buttonPrompt").addEventListener('click', clickedPrompt);
document.querySelector("#buttonConfirm").addEventListener('click', clickedConfirm);

const modalContainer = document.querySelector("#modalContainer");
const interactionResult = document.querySelector("#interactionResult");

function clickedAlert(){
    customAlert("Esta es una alerta javascript!");
    interactionResult.innerHTML = "";
}

function clickedPrompt(){
    customPrompt("Ingresa un valor!");
    interactionResult.innerHTML = "";
}

function clickedConfirm(){
    customConfirm("Esta es una alerta de confirmación!");
    interactionResult.innerHTML = "";
}

function customAlert(message){
    modalContainer.innerHTML = `
            <div id="alert" class="userNotification">
                <h4>Alert</h4>
                <span id="alertText">` + message + `</span>
                <div class="notificationButtons">
                    <button id="acceptAlert">Accept</button>
                </div>
            </div>`;
    document.querySelector("#alertText").innerHTML = message;
    document.querySelector("#acceptAlert").addEventListener('click', acceptAlert);
}

function customPrompt(message = '', defaultMessage = 'Input text'){
    modalContainer.innerHTML = `
            <div id="prompt" class="userNotification">
                <h4>Prompt</h4>
                <span id="promptText">` + message + `</span>
                <input type="text" id="promptInput" placeholder="` + defaultMessage + `">
                <div class="notificationButtons">
                    <button id="acceptPrompt">Accept</button>
                    <button id="cancelPrompt">Cancel</button>
                </div>
            </div>`;
    document.querySelector("#promptText").innerHTML = message;
    document.querySelector("#acceptPrompt").addEventListener('click', acceptPrompt);
    document.querySelector("#cancelPrompt").addEventListener('click', cancelPrompt);
}

function customConfirm(message){
    modalContainer.innerHTML = `
            <div id="confirm" class="userNotification">
                <h4>Confirm</h4>
                <span id="confirmText">` + message + `</span>
                <div class="notificationButtons">
                    <button id="acceptConfirm">Accept</button>
                    <button id="cancelConfirm">Cancel</button>
                </div>
            </div>`;
    document.querySelector("#confirmText").innerHTML = message;
    document.querySelector("#acceptConfirm").addEventListener('click', acceptConfirm);
    document.querySelector("#cancelConfirm").addEventListener('click', cancelConfirm);
}

function acceptAlert(){
    modalContainer.innerHTML = "";
}

function acceptPrompt(){
    const valorInputPrompt = document.querySelector("#promptInput").value;
    modalContainer.innerHTML = "";
}

function cancelPrompt(){
    modalContainer.innerHTML = "";
}

function acceptConfirm(){
    modalContainer.innerHTML = "";
}

function cancelConfirm(){
    modalContainer.innerHTML = "";
}