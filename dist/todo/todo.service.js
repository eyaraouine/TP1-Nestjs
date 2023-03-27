"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const todos_status_enum_1 = require("./enums/todos_status.enum");
const typeorm_1 = require("@nestjs/typeorm");
const todo_entity_1 = require("./entities/todo.entity");
const typeorm_2 = require("typeorm");
let TodoService = class TodoService {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
        this.todos = [];
    }
    getTodos() {
        return this.todos;
    }
    addTodo(addTodo) {
        const newTodo = Object.assign({ id: this.uuid(), createdAt: new Date().toLocaleDateString(), status: todos_status_enum_1.TodoStatusEnum.waiting }, addTodo);
        this.todos.push(newTodo);
        return newTodo;
    }
    getTodoById(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo)
            return todo;
        else {
            throw new common_1.NotFoundException(`Le todo d'id ${id} n'existe pas`);
        }
    }
    deleteTodo(id) {
        const todoToDelete = this.getTodoById(id);
        const todoIndex = this.todos.findIndex(todo => todo.id == id);
        this.todos.splice(todoIndex, 1);
        return todoToDelete;
    }
    updateTodo(id, updateTodo) {
        const todoToUpdate = this.getTodoById(id);
        todoToUpdate.name = updateTodo.name ? updateTodo.name : todoToUpdate.name;
        todoToUpdate.status = updateTodo.status ? updateTodo.status : todoToUpdate.status;
        todoToUpdate.description = updateTodo.description ? updateTodo.description : todoToUpdate.description;
        return todoToUpdate;
    }
    async addTodov2(todo) {
        return await this.todoRepository.save(todo);
    }
    async updateTodov2(todo, id) {
        const todoToUpdate = await this.todoRepository.findOne({ where: { id } });
        if (!todoToUpdate)
            throw new common_1.NotFoundException;
        todoToUpdate.name = todo.name ? todo.name : todoToUpdate.name;
        todoToUpdate.description = todo.description ? todo.description : todoToUpdate.description;
        todoToUpdate.status = todo.status ? todo.status : todoToUpdate.status;
        return await this.todoRepository.save(todoToUpdate);
    }
    async deleteTodov2(id) {
        return await this.todoRepository.delete(id);
    }
    async softDelete(id) {
        return await this.todoRepository.softDelete(id);
    }
    async restoreTodo(id) {
        return await this.todoRepository.restore(id);
    }
    async countByStatus() {
        return "nombre de todos actifs : " + await this.todoRepository.countBy({ status: todos_status_enum_1.TodoStatusEnum.actif }) +
            "  nombre de todos waiting : " + await this.todoRepository.countBy({ status: todos_status_enum_1.TodoStatusEnum.waiting }) +
            " nombre de todos done : " + await this.todoRepository.countBy({ status: todos_status_enum_1.TodoStatusEnum.done });
    }
    async getTodosv2() {
        return await this.todoRepository.find();
    }
    async getTodosv3ByQueryParams(params) {
        const { criteria, status } = params;
        return await this.todoRepository.find({
            where: [
                {
                    status: status,
                },
                {
                    name: (0, typeorm_2.Like)(`%${criteria}%`),
                },
                {
                    description: (0, typeorm_2.Like)(`%${criteria}%`),
                }
            ]
        });
    }
    async getTodoByIdv2(id) {
        const todo = await this.todoRepository.findOne({ where: { id } });
        if (!todo) {
            throw new common_1.NotFoundException(`Le todo avec l'id ${id} n'existe pas`);
        }
        return todo;
    }
    async getTodosv4ByQueryParams(params) {
        const { status, criteria } = params;
        const queryBuilder = this.todoRepository.createQueryBuilder("todos");
        queryBuilder.where(new typeorm_2.Brackets(qb => {
            qb.where('todos.name LIKE :criteria OR todos.description LIKE :criteria', { criteria: `%${criteria}%` });
        })).andWhere('todos.status = :status', { status: status });
        if (!queryBuilder.getMany())
            throw new common_1.NotFoundException();
        return await queryBuilder.getMany();
    }
    async getTodosv5ByPagination(page, limit) {
        const skip = (page - 1) * limit;
        const todos = await this.todoRepository.find({
            skip,
            take: limit,
        });
        return todos;
    }
};
__decorate([
    (0, common_1.Inject)('UUID'),
    __metadata("design:type", Function)
], TodoService.prototype, "uuid", void 0);
TodoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(todo_entity_1.TodoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map