import "mocha";
import * as mongoose from "mongoose";
import * as config from "config";
import { expect } from "chai";
import { MongoDB } from "../src/mongodb";
import { ProductEntity } from "../src/models/Product";

describe("Mongodb", () => {
	before(async () => {
		const mongoDb = new MongoDB();
		await mongoDb.connect();
		await ProductEntity.deleteMany({});
	});
	it("check DB", () => {
		expect(mongoose.connection.readyState).to.be.equal(1);
	});

	it("add product to DB", async () => {
		const p_name = "Apple";
		const p_price = 1.0;
		const date = Date.now();
		const product = new ProductEntity({
			name: p_name,
			price: p_price,
			dateCreated: date,
			dateUpdated: date,
		});
		await product.save();
		const products = await ProductEntity.find({});
		expect(products).have.length(1);
		expect(products[0]).have.property("name").equal(p_name);
	});
});
