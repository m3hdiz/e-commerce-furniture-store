/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Color` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."Color" ADD COLUMN     "code" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Color_code_key" ON "public"."Color"("code");
