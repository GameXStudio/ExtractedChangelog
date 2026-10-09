interface PatchNotes{
    version: string;
    date: string;
    importantMessage: string;
    changes: string[];
}

const changelogs: PatchNotes[] = [
    {
        version: "0.0.1",
        date: "2026-09-17",  // ungefaähr 17 - 19
        
        importantMessage: "please keep in mind that the Declarations in this version are inaccurate",
        changes: [
            "Added: Move Joystick",
            "Added: Attack Joystick",
            "Added: enemies",
            "Added: menu",
            "Added: fps screen"

        ]
    },
    {
        version: "0.0.2",
        date: "2026-09-24",
        importantMessage: "",
        changes: [
            "Added: Multiple projectiles can now be fired with a single shot.",
            "Added: The map has been given walls.",
            "Fixed: projectiles are now correctly reset and only returned to the pool upon impact.",
            "Fixed: you no longer stop if you hold down the joystick without moving it."
        ]
    },
    {
        version: "0.0.3",
        date: "2026-09-26",
        importantMessage: "Too many enemies can cause Problems",
        changes: [
            "Fixed: The projectiles from the pool spawn correctly when you shoot them sideways.",
            "Fixed: The projectiles from the pool are now being spawned correctly.",
            "Fixed: The glitching issue with projectlien has now been fixed.",
            "Fixed: Enemies can no longer glitch into the player."
        ]
    },
    {
        version: "0.4.0p",
        date: "2026-10-01",
        importantMessage: "Link to the version system documentation: [No Link Yet]",
        changes: [
            "Changed: Version system Changed",
            "Added: auto aim when pressing the attack button",
            "Added: Button for Changelog",
            "Added: Stamina System",
            "Added: Stamina Bar",
            "Added: Sprint button",
            "Added: Save and Load System",
            "Fixed: If the player leaves the play area they are teleported back to the play area.",
            "Fixed: If more than one projectile needs to be fired the projectiles are now always fired side by side."
        ]
    },
    {
        version: "0.4.1p",
        date: "2026-10-02",
        importantMessage: "",
        changes: [
            "Fixed: The player can no longer run if they hold down the sprint button and their stamina runs out.",
            "Fixed: When the player stands still and presses the sprint button they no longer lose stamina.",
            "Fixed: Save and Load System now works correctly.",
        ]
    },
    {
        version: "5.0.0p",
        date: "2026-10-05",
        importantMessage: "",
        changes: [
            "Added: Hotbar System with a Hotbar",
            "Added: Dropping and a Drop Button",
            "Added: Item Pick Up with a Item Pick Up Button",
            "Added: inventory system with a Inventory",
            "Added: Test Items"
        ]
    },
    {
        version: "0.6.0p",
        date: "2026-10-09",
        importantMessage: "",
        changes: [
            "Added: ammunition and Ammo",
            "Added: Reload Button",
            "Added: ammunition and Ammo Label",
            "Added: toggle for auto reload",
            "Added: HP Bar with an Health System and now you can die and respawn",
            "Added: Range for the auto aim on weapons",
            "Added: Shoot Cooldown for the Player",
            "Added: if you Die a Game Over Screen appears",
            "Fixed: Now inventory slots are no longer highlighted when you drag an item into them."
        ]
    }
];

const versionList = document.getElementById("version-list");

const changeLogContent = document.getElementById("changelog-content");

const buttonClasslist = "button-clicked";

let buttonList: HTMLButtonElement[] = [];

function ShowVersion(versionData: PatchNotes): void{
    if(changeLogContent != null)
    {
        const importantMessage = versionData.importantMessage?.trim() ? `<p>Important Message for this Release: ${versionData.importantMessage}</p>` : "";

        changeLogContent.innerHTML = `<h2>Version ${versionData.version}</h2><p>Released on: ${versionData.date}</p>${importantMessage}<ul>${versionData.changes.map((change: string) => `<li>${change}</li>`).join('')}</ul>`;
    }
}

changelogs.forEach((log: PatchNotes) => {
    const button = document.createElement("button");

    buttonList.push(button);

    button.id = "buttonId";
    button.textContent = `Changelog ${log.version}`;

    button.addEventListener("click", () =>{
        buttonList.forEach((btn: HTMLButtonElement) => {
            btn.classList.remove(buttonClasslist);
        });

        ShowVersion(log);
        button.classList.add(buttonClasslist);
    });

    if(versionList){
        versionList.appendChild(button);
    }
});

buttonList[buttonList.length -1].classList.add("button-clicked");

if(changelogs.length > 0){
    ShowVersion(changelogs[changelogs.length - 1]);
}
