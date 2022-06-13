<?php
// View interface
interface ViewInterface
{
    public function getName(): string;
}

// Status 
enum Status implements ViewInterface
{
    case PENDING;
    case PROCESSING;
    case COMPLETED;

    public function getName(): string
    {
        return match ($this) {
            self::PENDING => 'Archived',
            self::PROCESSING => 'Processing',
            self::COMPLETED => 'Completed',
        };
    }
}

enum Status2: string
{
    case PENDING = 'Archived';
    case PROCESSING = 'Processing';
    case COMPLETED = 'Completed';
}

var_dump("Status: " . Status::COMPLETED->getName());
var_dump("Status: value: " . Status2::COMPLETED->value . ', name: ' . Status2::COMPLETED->name);

foreach (Status2::cases() as $enumCase) {
    var_dump('name: ' . $enumCase->name, 'value: ' . $enumCase->value);
}
