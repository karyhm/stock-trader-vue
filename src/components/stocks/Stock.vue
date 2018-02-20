<template>

		<div class="col-sm-3">

			<div class="card border-success">
				<div class="card-header bg-transparent border-success">{{ stock.name }} <small>(Price: {{ stock.price }})</small></div>

				<div class="card-body text-success">
					<div class="card-text">
						<div class="input-group mb-3">
							<input type="text" class="form-control" v-model="quantity" placeholder="Qty">
							<div class="input-group-append">
								<button class="btn btn-outline-secondary"
									type="button"
									@click="buyStock"
									:disabled="quantity <= 0">
									Button
								</button>
							</div>
						</div>
					</div>
				</div>

			</div>

	</div>

</template>

<script>
export default {
	props: ['stock'],
	data () {
		return {
			quantity: 0
		}
	},
	methods: {
		buyStock () {
			const order = {
				stockId: this.stock.id,
				stockPrice: this.stock.price,
				price: this.quantity
			}
			console.log(order, typeof this.quantity)
			this.quantity = 0
		}
	}
}
</script>
