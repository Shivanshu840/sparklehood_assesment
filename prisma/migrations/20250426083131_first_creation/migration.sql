-- CreateEnum
CREATE TYPE "severity_type" AS ENUM ('Low', 'Medium', 'High');

-- CreateTable
CREATE TABLE "Incident" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "severity" "severity_type" NOT NULL,
    "reported_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Incident_pkey" PRIMARY KEY ("id")
);
