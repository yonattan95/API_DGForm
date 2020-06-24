import { Controller, Get, Post } from '@nestjs/common';
import { FormService } from './form.service';
import { ResponseAPI, SuccessResponse } from '../dto/response.dto';
import FormEntity from './entities/form.entity';

@Controller('forms')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Get('pending')
  getPendingFormList(): ResponseAPI<Array<FormEntity>> {
    return new SuccessResponse([new FormEntity()]);
  }
  @Get('complete')
  getCompleteFormList(): ResponseAPI<FormEntity> {
    return null;
  }
  @Get(':id')
  getFormById(): ResponseAPI<FormEntity> {
    return null;
  }
  @Post()
  newForm(): ResponseAPI<FormEntity> {
    return null;
  }
}
