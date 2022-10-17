## Installation

```bash
composer require michalbialkowski/notion-renderer-field
```

## Usage

```php
namespace App\Nova;

use Michalbialkowski\NotionRendererField\NotionRendererField;

class Note extends Resource
{
	// ...

	public function fields(Request $request)
	{
		return [
			// ...
			
			NotionRendererField::make('Notion Link', 'link'),
			
			// ...
		];
	}
}
```
## Form View

!['screenshot'](https://dsc.cloud/Michalbialkowski/Zrzut-ekranu-2022-10-17-o-14.45.22.png)

## Details View

!['screenshot'](https://dsc.cloud/Michalbialkowski/Zrzut-ekranu-2022-10-17-o-14.36.11.png)
