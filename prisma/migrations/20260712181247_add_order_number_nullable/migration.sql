-- AlterTable
ALTER TABLE "Purchase" ADD COLUMN "orderNumber" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Purchase_orderNumber_key" ON "Purchase"("orderNumber");
