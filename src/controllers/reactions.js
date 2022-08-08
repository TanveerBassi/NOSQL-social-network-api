const { Thought } = require("../../models");

const createReactionForThought = async (req, res) => {
  try {
    //get thought id from req params
    const { thoughtId } = req.params;

    //push new reaction inside the reactions array for that thought id
    const data = await Thought.findByIdAndUpdate(
      thoughtId,
      {
        $push: { reactions: { ...req.body } },
      },
      { new: true }
    );

    return res.json({ success: true, data });
  } catch (error) {
    console.log(
      `[ERROR]: Failed to create a new reaction for present thought | ${error.message}`
    );

    return res.status(500).json({
      success: false,
      error: "Failed to create a new reaction for present thought",
    });
  }
};

const deleteReactionByThought = async (req, res) => {
  try {
    const { thoughtId, reactionId } = req.params;
    const data = await Thought.findByIdAndUpdate(
      thoughtId,
      {
        $pull: { reactions: { _id: reactionId } },
      },
      { new: true }
    );
    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete reaction | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete reaction" });
  }
};

module.exports = { createReactionForThought, deleteReactionByThought };
