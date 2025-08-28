/*
  Warnings:

  - Made the column `code` on table `Color` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Color" ALTER COLUMN "code" SET NOT NULL;
