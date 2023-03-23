-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "avatar_url" TEXT,
    "registration_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "phone" TEXT NOT NULL,
    "birthday" TEXT,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "from_locaion" TEXT,
    "to_location" TEXT,
    "arrival_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "departure_date" BIGINT,
    "unit_price" REAL NOT NULL,
    "count" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "count" INTEGER NOT NULL,
    "total_price" REAL NOT NULL,
    "status" TEXT NOT NULL,
    "registration_date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,
    "ticketId" INTEGER,
    CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Order_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_password_key" ON "User"("password");

-- CreateIndex
CREATE UNIQUE INDEX "Order_ticketId_key" ON "Order"("ticketId");
