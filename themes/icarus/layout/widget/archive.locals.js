module.exports = (ctx, locals) => {
	const { get_config } = ctx;
	const { layout } = ctx.page;
	if (get_config('widget.archive.not_show').indexOf(layout) !== -1) {
        return null;
    }
    return locals;
}