Installation:

composer require michalbialkowski/notion-renderer-field

Usage:

use Michalbialkowski\NotionRendererField\NotionRendererField;

…

NotionRendererField::make('Notion Link', 'link')
	->displayUsing(fn () => $this->link),

