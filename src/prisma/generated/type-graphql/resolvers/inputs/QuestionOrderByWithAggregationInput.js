"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionOrderByWithAggregationInput = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const QuestionAvgOrderByAggregateInput_1 = require("../inputs/QuestionAvgOrderByAggregateInput");
const QuestionCountOrderByAggregateInput_1 = require("../inputs/QuestionCountOrderByAggregateInput");
const QuestionMaxOrderByAggregateInput_1 = require("../inputs/QuestionMaxOrderByAggregateInput");
const QuestionMinOrderByAggregateInput_1 = require("../inputs/QuestionMinOrderByAggregateInput");
const QuestionSumOrderByAggregateInput_1 = require("../inputs/QuestionSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let QuestionOrderByWithAggregationInput = class QuestionOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], QuestionOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], QuestionOrderByWithAggregationInput.prototype, "content", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuestionCountOrderByAggregateInput_1.QuestionCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", QuestionCountOrderByAggregateInput_1.QuestionCountOrderByAggregateInput)
], QuestionOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuestionAvgOrderByAggregateInput_1.QuestionAvgOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", QuestionAvgOrderByAggregateInput_1.QuestionAvgOrderByAggregateInput)
], QuestionOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuestionMaxOrderByAggregateInput_1.QuestionMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", QuestionMaxOrderByAggregateInput_1.QuestionMaxOrderByAggregateInput)
], QuestionOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuestionMinOrderByAggregateInput_1.QuestionMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", QuestionMinOrderByAggregateInput_1.QuestionMinOrderByAggregateInput)
], QuestionOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuestionSumOrderByAggregateInput_1.QuestionSumOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", QuestionSumOrderByAggregateInput_1.QuestionSumOrderByAggregateInput)
], QuestionOrderByWithAggregationInput.prototype, "_sum", void 0);
QuestionOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], QuestionOrderByWithAggregationInput);
exports.QuestionOrderByWithAggregationInput = QuestionOrderByWithAggregationInput;
