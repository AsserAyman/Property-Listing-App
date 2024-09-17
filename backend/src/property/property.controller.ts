import { Controller, Get, Post, Body, Param, Delete, Query } from '@nestjs/common';
import { PropertyService } from './property.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { Property } from './entities/property.entity';

@ApiTags('properties')
@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new property' })
  @ApiResponse({
    status: 201,
    description: 'The property has been successfully created.',
    type: Property,
  })
  create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertyService.create(createPropertyDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all properties' })
  @ApiResponse({
    status: 200,
    description: 'Return all properties.',
    type: [Property],
  })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 9) {
    return this.propertyService.findAll(page, limit);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a property by id' })
  @ApiResponse({
    status: 200,
    description: 'Return the property.',
    type: Property,
  })
  @ApiResponse({ status: 404, description: 'Property not found.' })
  findOne(@Param('id') id: string) {
    return this.propertyService.findOne(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a property' })
  @ApiResponse({
    status: 200,
    description: 'The property has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Property not found.' })
  remove(@Param('id') id: string) {
    return this.propertyService.remove(+id);
  }
}