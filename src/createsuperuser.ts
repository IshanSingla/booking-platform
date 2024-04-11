const readline = require("readline");
const { clear } = require("console");
const { PrismaClient } = require("@prisma/client");

clear(); // Clear the terminal screen
console.log(`
    ██████╗░██████╗░██████╗░░█████╗░
    ██╔══██╗██╔══██╗██╔══██╗██╔══██╗
    ██║░░██║██████╔╝██║░░██║██║░░██║
    ██║░░██║██╔══██╗██║░░██║██║░░██║
    ██████╔╝██║░░██║██████╔╝╚█████╔╝
    ╚═════╝░╚═╝░░╚═╝╚═════╝░░╚════╝░

        Superuser Creator V1.0.0`)

// Function to create a superuser
function createSuperUser() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    // Default values
    let defaultPis = "9999999999";
    let defaultName = "Super User";

    rl.question(
        `Name (leave blank to use '${defaultName}'): `,
        (name: string) => {
            name = name.trim() || defaultName;
            rl.question(
                `PhoneNumber (leave blank to use '${defaultPis}'): `,
                (pis: string) => {
                    pis = pis.trim() || defaultPis; // If empty, use default
                    prismaFunction(name, pis)
                    rl.close();
                }
            );
        }
    );
}

const prismaFunction = async (name: string, phoneNumber: string) => {
    const prisma = new PrismaClient();
    prisma.user.create({
        data: {
            name: name,
            phoneNumber: phoneNumber,
            role: "SUPERADMIN",
        },
    }).then(() => {
        console.log(`Superuser created successfully with \nName: ${name} \nPhoneNumber: ${phoneNumber}`);
    }).catch((error: any) => {
        console.error(error);
    });
}

// Call the function to create a superuser
createSuperUser();