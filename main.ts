interface PatchNotes{
    version: string;
    date: string;
    importantMessage: string;
    changes: string[];
}

const changelogs: PatchNotes[] = [
    {
        version: "0.0.1 (Prototype)",
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
        version: "0.0.2 (Prototype)",
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
        version: "0.0.3 (Prototype)",
        date: "2026-09-26",
        importantMessage: "Too many enemies can cause Problems",
        changes: [
            "Fixed: The projectiles from the pool spawn correctly when you shoot them sideways.",
            "Fixed: The projectiles from the pool are now being spawned correctly.",
            "Fixed: The glitching issue with projectlien has now been fixed.",
            "Fixed: Enemies can no longer glitch into the player."
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

if(changelogs.length > 0){
    ShowVersion(changelogs[changelogs.length - 1]);
}