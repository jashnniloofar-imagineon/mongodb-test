import "mocha";
import * as mongoose from "mongoose";
import * as config from "config";
import { expect } from "chai";
import { MongoDB } from "../src/mongodb";
describe("Mongodb", () => {
	before(async () => {
		const mongoDb = new MongoDB();
		await mongoDb.connect();
	});
	it("check DB", () => {
		expect(mongoose.connection.readyState).to.be.equal(1);
	});
});
