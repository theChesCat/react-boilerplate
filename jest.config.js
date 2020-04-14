module.exports = {
    moduleDirectories: ["node_modules", "src/app"],
    collectCoverageFrom: [
        "src/app/**",
        "!src/app/**/*.stories.js",
        "!src/app/**/*.style.js",
        "!src/app/**/*.snap",
    ],
    setupFiles: ["jest-date-mock"],
    setupFilesAfterEnv: [
        "<rootDir>/jest.setup.js"
    ],
    snapshotSerializers: ["enzyme-to-json/serializer"]
}
