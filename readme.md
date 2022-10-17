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
