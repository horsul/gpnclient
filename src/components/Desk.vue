<template>
  <div class="grid">
    <div class="grid two">
      <label>Заказ:</label>
      <select v-model="order" @change="onOrderChange(order)">
        <option v-for="(r, i) in orders" :key="i" :value="r.id">{{ r.number }}</option>
      </select>
    </div>
    <div class="table-grid">
      <div class="table-row">
        <header>№</header>
        <header>Наименование</header>
        <header>Количество</header>
        <header>Цена</header>
      </div>
      <div class="table-row" v-for="(r, i) in items" :key="i">
        <span :class="['cell', 'right']">{{ i + 1 }}</span>
        <span :class="['cell', 'right']">{{ r.name }}</span>
        <span :class="['cell', 'right']">{{ r.amount }}</span>
        <span :class="['cell', 'right']">{{ r.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [],
      items: []
    }
  },
  async mounted() {
    const { data } = await this.axios.get('/order/all')

    this.orders = data
  },
  methods: {
    async onOrderChange(id) {
      const { data } = await this.axios.get('/item', { params: { order: id } })
      
      this.items = data
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.grid {
  display: grid;
  gap: 5px 3px;
  min-width: 450px;
}

.grid.two {
  grid-template-columns: auto 1fr;
}

.grid label {
  text-align: right;
}

.grid select {
  width: fit-content;
}

.table-grid {
  display: grid;
  align-items: center;
  overflow: auto;
  white-space: nowrap;
  grid-auto-columns: minmax(29px, max-content);
  grid-auto-rows: minmax(29px, max-content);
  flex: 1;
  grid-template-columns: repeat(4, max-content)
}

.table-grid header {
  will-change: transform;
  top: 0;
  background-color: lightslategrey;
  color: white;
  padding: 5px;
  border-right: 1px solid white;
  display: flex;
  align-items: center;
  min-width: 29px;
  z-index: 2;
}

.table-grid .table-row {
  display: contents;
}

.table-grid .cell {
  display: flex;
  align-items: center;
  padding: 4px 5px;
  height: 100%;
  background-color: white;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid white;
}

.table-grid header:last-child,
.table-grid .cell:last-child {
  border-right: 0;
}

.table-grid header.right,
.table-grid .cell.right {
  justify-content: flex-end;
}
</style>
