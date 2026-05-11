-- CreateTable
CREATE TABLE "PolucheniyaData" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "desc" TEXT,

    CONSTRAINT "PolucheniyaData_pkey" PRIMARY KEY ("id")
);
