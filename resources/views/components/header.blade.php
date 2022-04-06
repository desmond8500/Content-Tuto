<div class="page-header">
    <div class="row align-items-center mw-100">
        <div class="col">
            <div class="mb-1">
                <ol class="breadcrumb" aria-label="breadcrumbs">
                    <li class="breadcrumb-item"><a href="{{ route('index') }}">Accueil</a></li>
                    {{ $breadcrumps ?? '' }}
                </ol>
            </div>
            <h2 class="page-title">
                <span class="text-truncate">{{ $title ?? 'Title' }}</span>
            </h2>
        </div>
        <div class="col-auto">
            <div class="btn-list">
                {{ $slot ?? '' }}
            </div>
        </div>
    </div>
</div>
