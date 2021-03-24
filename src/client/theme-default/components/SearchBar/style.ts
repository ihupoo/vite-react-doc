import styled from 'styled-components'

export const Wrap = styled.div`
	margin-left: 20px;
	position: relative;
	display: inline-block;

	input {
		width: 200px;
		height: 32px;
		padding: 0 38px 0 14px;
		color: var(--doc-heading);
		font-size: 14px;
		border: 0;
		outline: none;
		transition: all 0.2s;
		border-radius: 16px;
		background: url('data:image/png;base64,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')
			#f5f6f7 no-repeat right 14px center / 16px;
		appearance: none;
	}
	input::-webkit-search-cancel-button {
		display: none;
	}

	> ul {
		list-style: none;
		position: absolute;
		top: 100%;
		left: 0;
		z-index: 10;
		margin: 8px 0 0;
		min-width: 280px;
		max-width: 400px;
		padding: 6px 0;
		background-color: #fff;
		border: 1px solid var(--doc-border);
		border-radius: 1px;
		box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.05);
		box-sizing: border-box;

		&:empty {
			display: none;
		}

		li {
			font-size: 15px;

			a {
				display: block;
				padding: 6px 20px;
				color: var(--doc-secondary);
				text-decoration: none;
				transition: background-color 0.3s;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;

				&:hover {
					color: var(--doc-primary);
					background-color: var(--doc-light-bg);
				}
			}

			span:first-child {
				position: relative;
				display: inline-block;
				max-width: 50%;
				padding-right: 26px;
				vertical-align: -0.37em;
				overflow: hidden;
				text-overflow: ellipsis;
				opacity: 0.8;

				&::after {
					content: '>';
					position: absolute;
					top: 50%;
					right: 6px;
					opacity: 0.6;
					transform: translateY(-54%);
				}
			}
		}
	}

	@media only screen and (max-width: 1024px) {
		margin-right: -14px;

		> input:not(:focus) {
			width: 32px;
			padding-right: 0;
			box-shadow: none;
			cursor: pointer;
			background-position: right 8px center;

			+ ul {
				transition: 0.1s visibility;
				visibility: hidden;
			}
		}
	}

	@media (max-width: 767px) {
		position: absolute;
		top: 9px;
		right: 24px;
		display: block !important;
	}
`
