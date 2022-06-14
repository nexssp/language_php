<?php
// Named Parameters example
function person(string $name, int $age = null): void
{
    echo $name . ' with age: ' . ($age ?? "not specified") . "\n";
}

person(name: 'Some name 1');
person(age: 111, name: 'Some name 2');
