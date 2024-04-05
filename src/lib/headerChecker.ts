const browsers = [
    {
        name: "Chrome",
        value: "Chrome",
        version: "0",
    },
    {
        name: "Firefox",
        value: "Firefox",
        version: "0",
    },
    {
        name: "Safari",
        value: "Safari",
        version: "0",
    },
    {
        name: "Edge",
        value: "Edge",
        version: "0",
    },
    // Add more browsers if needed
    // ...
];

const devices = [
    {
        name: "iPhone/iOS",
        value: "iPhone|iPad|iPod",
        version: "0",
    },
    {
        name: "Android",
        value: "Android",
        version: "0",
    },
    {
        name: "Windows 10",
        value: "Windows NT 10.0",
        version: "10",
    },
    {
        name: "Windows 8.1",
        value: "Windows NT 6.3",
        version: "6.3",
    },
    {
        name: "Windows 8",
        value: "Windows NT 6.2",
        version: "6.2",
    },
    {
        name: "Windows",
        value: "Windows",
        version: "0",
    },
    // Add more Windows versions if needed
    // ...
    {
        name: "macOS Big Sur",
        value: "Mac OS X 11",
        version: "11.0",
    },
    {
        name: "macOS Catalina",
        value: "Mac OS X 10.15",
        version: "10.15",
    },
    {
        name: "macOS Mojave",
        value: "Mac OS X 10.14",
        version: "10.14",
    },
    {
        name: "macOS",
        value: "Macintosh",
        version: "0",
    },
    // Add more macOS versions if needed
    // ...

    // Add more Android versions if needed
    // ...

    {
        name: "Linux",
        value: "Linux",
        version: "0",
    },
];

interface Browser {
    name: string;
    version: string;
    value: string;
}
interface Browsers {
    name: string;
    version: string;
}

interface Device {
    name: string;
    value: string;
    version: string;
}

interface OS {
    name: string;
    version: string;
    device: string;
}

export default function HeaderChecker(header: string = ""): { os: OS; browser: Browsers } {
    let os: OS = { name: "unknown", version: "0", device: "unknown" };
    let browser: Browsers = { name: "unknown", version: "0" };
    let condition = false;

    devices.forEach((currentdevice: Device, i: number) => {
        if (i === 0) condition = false;
        else if (condition === true) {
            return;
        }
        const regex = new RegExp(currentdevice.value, "i");
        if (regex.test(header)) {
            const regexVersion = new RegExp(
                `${currentdevice.value}[^\\d]*([\\d._]+)`,
                "i"
            );
            const matchVersion = header.match(regexVersion);
            const version = matchVersion ? matchVersion[1]?.replace(/_/g, ".") : "0";
            let device = currentdevice.name;

            if (currentdevice.name === "iPhone/iOS") {
                const regexDevice = new RegExp(
                    `(${currentdevice.value}[^\\d]*([\\d._]+))`,
                    "i"
                );
                const matchDevice = header.match(regexDevice);
                device = matchDevice ? matchDevice[1]?.replace(/_/g, ".") : "0";
            } else if (currentdevice.name === "Android") {
                const deviceRegex = new RegExp(
                    `${currentdevice.value}[^;]*;\\s*(\\w+)`
                );
                const matchDevice = header.match(deviceRegex);
                device =
                    matchDevice && matchDevice[1] !== "k"
                        ? matchDevice[1]
                        : currentdevice.name;
            }

            os = {
                name: currentdevice.name,
                version: version,
                device: device,
            };
            condition = true;
        }
    });

    browsers.forEach((currentbrowser: Browser, i: number) => {
        if (i === 0) condition = false;
        else if (condition === true) {
            return;
        }
        const regex = new RegExp(currentbrowser.value, "i");
        if (regex.test(header)) {
            const regexVersion = new RegExp(
                `${currentbrowser.value}[^\\d]*([\\d._]+)`,
                "i"
            );
            const matchVersion = header.match(regexVersion);
            const version = matchVersion ? matchVersion[1]?.replace(/_/g, ".") : "0";
            browser = {
                name: currentbrowser.name,
                version: version,
            };
            condition = true;
        }
    });
    return { os, browser };
}

// export default HeaderChecker;
