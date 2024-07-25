import { Controller, Get, Param } from '@nestjs/common';
import { ProcedureService } from './procedure.service';

@Controller('procedure')
export class ProcedureController {
  constructor(private readonly procedureService: ProcedureService) {}

  @Get('execute/:procedureName')
  async executeProcedure(@Param('procedureName') procedureName: string): Promise<any> {
    // Ejemplo de ejecución de un procedimiento con parámetros
    const parameters = [/* Lista de parámetros */];
    return this.procedureService.executeProcedure(procedureName, parameters);
  }
}
