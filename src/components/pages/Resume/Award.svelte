<script>
  export let award = {
    title: '',
    date: '',
    issuedBy: '',
    description: ''
  };
</script>

<div class="award mt-2 mb-2">
    <div>
        <span class="duration">{award.date}</span>
    </div>
    <span class="block uppercase">{award.title}</span>
    <span class="block issued-by">{award.issuedBy}</span>
    <div class="description">{award.description}</div>
</div>

<style>
    .award {
        min-height: 90px;
    }

    .award:last-of-type {
        margin-bottom: 0;
    }

    .duration {
        font-size: 13px;
        background-color: var(--background);
        border-radius: var(--radius);
        padding: 1px 6px;
    }

    .issued-by {
        font-size: 12px;
        color: var(--dark-text)
    }

    .description {
        font-size: 0.9em;
    }
</style>
