module.exports = (ctx, locals) => {
    const { get_config, get_config_from_obj } = ctx;
	const { layout } = ctx.page;
    const links = get_config_from_obj(locals.widget, 'links');
    if (Object.keys(links).length == 0) {
        return null;
    }
	if (get_config('widget.links.not_show').indexOf(layout) !== -1) {
        return null;
    }
    return Object.assign(locals, { links });
}