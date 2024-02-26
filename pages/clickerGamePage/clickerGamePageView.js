function clickerGameView() {
    if (model.app.loggedInUser) {
        let clickerGameInterval;
        let clickerGame = model.app.loggedInUser.clickerGame;
        let totalIdlePointsPerSec = clickerGame.idleClicker1 + clickerGame.idleClicker2 + clickerGame.idleClicker3;
    
        document.getElementById('mainContentDiv').innerHTML = /*HTML*/`
        <div id="clickerGamePageContainer">
            <div id="clickerGameContainer">
                <div id="pointsDiv">Points: <br>${clickerGame.points} <br> ${totalIdlePointsPerSec + ' points/sec'}</div>
                <div id="clickerDiv" onclick="clickerGameAddPoints()">
                    <div id="circleText">Click Me!</div>
                </div>
                <div class="levelIndicator">Clicker level/Points per click:${' ' + clickerGame.clickerLevel}</div>
                <div id="ClickerGameButtonsDiv">
                    <div>
                        <div>250 points to buy upgrade</div>
                        <button class="clickerGameButtons" id="buySingleUpgrade" onclick="clickerGameAddSingleUpgrade()">Upgrade clicker level</button>
                    </div>
                    <div>
                        <div>3000 points to buy idle upgrade</div>
                        <button class="clickerGameButtons" onclick="clickerGameUpgradeIdlePoints1()">Add 1 points/s</button>
                        <div id="idleClickDiv1">${clickerGame.idleClicker1 + ' points per second'}</div>
                    </div>
                    <div>
                        <div>10 000 points to buy idle upgrade</div>
                        <button class="clickerGameButtons" onclick="clickerGameUpgradeIdlePoints2()">Add 10 points/s</button>
                        <div id="idleClickDiv1">${clickerGame.idleClicker2 + ' points per second'}</div>
                    </div>
                    <div>
                        <div>50 000 points to buy idle upgrade</div>
                        <button class="clickerGameButtons" onclick="clickerGameUpgradeIdlePoints3()">Add 50 points/s</button>
                        <div id="idleClickDiv1">${clickerGame.idleClicker3 + ' points per second'}</div>
                    </div>
                </div>
            </div>
        </div>
        `;
        if (!clickerGameInterval) {
            clickerGameTimer();
        }
        model.app.currentPage = 'clickerGamePage';
        updateNavButtonsVisibility('clickerGamePage');
    }
}

function clickerGameAddPoints() {
    let clickerGame = model.app.loggedInUser.clickerGame;
    clickerGame.points += clickerGame.upgradeClicker;
    document.getElementById('pointsDiv').innerHTML = clickerGame.points;
    clickerGameView();
}
function clickerGameAddSingleUpgrade(){
    let clickerGame = model.app.loggedInUser.clickerGame;
    if(clickerGame.points < 250) return;
    clickerGame.points -= 250;
    clickerGame.upgradeClicker += 1;
    clickerGame.clickerLevel += 1;
    clickerGameView();
}
function clickerGameTimer(){
    let clickerGame = model.app.loggedInUser.clickerGame;
    clearInterval(clickerGameInterval);
    clickerGameInterval = setInterval(() =>{
        clickerGame.interval += 1;
        clickerGame.points = clickerGame.points + clickerGame.idleClicker1;
        clickerGame.points = clickerGame.points + clickerGame.idleClicker2;
        clickerGame.points = clickerGame.points + clickerGame.idleClicker3;
        //console.log(interval);
        clickerGameView();
    }, 1000);
}
function clickerGameUpgradeIdlePoints1(){
    let clickerGame = model.app.loggedInUser.clickerGame;
    if (clickerGame.points < 3000) return;
    clickerGame.points -= 3000;
    clickerGame.idleClicker1 += 1;
    clickerGameView();
}
function clickerGameUpgradeIdlePoints2(){
    let clickerGame = model.app.loggedInUser.clickerGame;
    if (clickerGame.points < 10000) return;
    clickerGame.points -= 10000;
    clickerGame.idleClicker2 += 10;
    clickerGameView();
}
function clickerGameUpgradeIdlePoints3(){
    let clickerGame = model.app.loggedInUser.clickerGame;
    if (clickerGame.points < 50000) return;
    clickerGame.points -= 50000;
    clickerGame.idleClicker3 += 50;
    clickerGameView();
}
function clearClickerGameInterval() {
    let clickerGame = model.app.loggedInUser.clickerGame;
    clearInterval(clickerGameInterval);
}