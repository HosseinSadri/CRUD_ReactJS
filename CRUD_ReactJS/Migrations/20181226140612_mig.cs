using Microsoft.EntityFrameworkCore.Migrations;

namespace CRUD_ReactJS.Migrations
{
    public partial class mig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_products_cities_cityId",
                table: "products");

            migrationBuilder.DropForeignKey(
                name: "FK_products_productBrands_productBrandId",
                table: "products");

            migrationBuilder.DropIndex(
                name: "IX_products_cityId",
                table: "products");

            migrationBuilder.DropIndex(
                name: "IX_products_productBrandId",
                table: "products");

            migrationBuilder.DropColumn(
                name: "cityId",
                table: "products");

            migrationBuilder.DropColumn(
                name: "productBrandId",
                table: "products");

            migrationBuilder.AddColumn<int>(
                name: "Brand_Id",
                table: "products",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "City_Id",
                table: "products",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_products_Brand_Id",
                table: "products",
                column: "Brand_Id");

            migrationBuilder.CreateIndex(
                name: "IX_products_City_Id",
                table: "products",
                column: "City_Id");

            migrationBuilder.AddForeignKey(
                name: "FK_products_productBrands_Brand_Id",
                table: "products",
                column: "Brand_Id",
                principalTable: "productBrands",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_products_cities_City_Id",
                table: "products",
                column: "City_Id",
                principalTable: "cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_products_productBrands_Brand_Id",
                table: "products");

            migrationBuilder.DropForeignKey(
                name: "FK_products_cities_City_Id",
                table: "products");

            migrationBuilder.DropIndex(
                name: "IX_products_Brand_Id",
                table: "products");

            migrationBuilder.DropIndex(
                name: "IX_products_City_Id",
                table: "products");

            migrationBuilder.DropColumn(
                name: "Brand_Id",
                table: "products");

            migrationBuilder.DropColumn(
                name: "City_Id",
                table: "products");

            migrationBuilder.AddColumn<int>(
                name: "cityId",
                table: "products",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "productBrandId",
                table: "products",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_products_cityId",
                table: "products",
                column: "cityId");

            migrationBuilder.CreateIndex(
                name: "IX_products_productBrandId",
                table: "products",
                column: "productBrandId");

            migrationBuilder.AddForeignKey(
                name: "FK_products_cities_cityId",
                table: "products",
                column: "cityId",
                principalTable: "cities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_products_productBrands_productBrandId",
                table: "products",
                column: "productBrandId",
                principalTable: "productBrands",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
