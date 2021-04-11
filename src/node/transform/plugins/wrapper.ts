import { IPluginTransformer } from '../index'
import visit from 'unist-util-visit'
import { Node } from 'unist'
import { Root, Element, Comment, Text } from 'hast'

interface PluginProps {
	id: string
}

export default function plugin({ id }: PluginProps): IPluginTransformer {
	return (tree, vfile) => {
		visit(tree, 'root', function visitor(node: Node & Root) {
			node.children = node.children.reduce((result, item) => {
				if (!result.length || result[result.length - 1]._previewer) {
					result.push({
						type: 'element',
						tagName: 'div',
						properties: { className: 'markdown' },
						children: [],
					})
				}
				if (
					item.type === 'element' &&
					item.tagName === 'pre' &&
					item.children &&
					item.children.length === 1 &&
					item.children[0].type === 'element' &&
					item.children[0].tagName === 'code' &&
					item.children[0].properties &&
					item.children[0].properties.live
				) {
					result.push({
						_previewer: true,
						type: 'element',
						tagName: 'div',
						properties: { className: 'code-live' },
						children: [item],
					})
				} else {
					result[result.length - 1].children.push(item as Element | Comment | Text)
				}
				return result
			}, [] as Element[])
		})
	}
}
